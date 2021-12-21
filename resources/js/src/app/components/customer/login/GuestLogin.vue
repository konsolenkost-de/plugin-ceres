<template>
    <div>
        <form ref="form" method="post" class="mb-3 login-pwd-reset">
            <div class="input-unit" data-validate="mail">
                <input type="email" name="email" autocomplete="email" data-testing="guest-login-input" :id="_uid" v-model="email" data-autofocus>
                <label :for="_uid">{{ $translate("Ceres::Template.loginEmail") }}*</label>
            </div>
            <span class="error-msg">{{ $translate("Ceres::Template.loginEnterConfirmEmail") }}</span>
            <input type="checkbox" id="checkbox" v-model="checked">
            <label for="checkbox">
                Ich willige ein, dass meine E-Mail-Adresse im Rahmen der Vertragsabwicklung an den Versanddienstleister weitergegeben wird, um über den Status der Lieferung informiert zu werden. Dieser Verwendung der E-Mail-Adresse kann jederzeit durch eine Mitteilung an uns widersprochen werden. Die Kontaktdaten für die Ausübung des Widerspruchs finden Sie im Impressum.
            </label>
            <div class="text-right">
                <button @click.prevent="validate" :disabled="isDisabled" class="btn btn-primary btn-medium btn-appearance" :class="buttonSizeClass" data-testing="guest-login-button">
                    {{ $translate("Ceres::Template.loginNext") }}
                    <icon icon="arrow-right" :loading="isDisabled"></icon>
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import { ButtonSizePropertyMixin } from "../../../mixins/buttonSizeProperty.mixin";

import ApiService from "../../../services/ApiService";
import AutoFocusService from "../../../services/AutoFocusService";
import ValidationService from "../../../services/ValidationService";
import { navigateTo } from "../../../services/UrlService";
import { isDefined, isNullOrUndefined } from "../../../helper/utils";

export default {
    mixins: [ButtonSizePropertyMixin],

    props: {
        backlink:
        {
            type: String
        },
        initialEmail:
        {
            type: String,
            default: ""
        }
    },

    data()
    {
        return {
            email: "",
            isDisabled: false,
            checked: false,
        };
    },

    created()
    {
        console.log("cre"+this.checked)

        if (!isNullOrUndefined(this.initialEmail) && this.initialEmail.length > 0)
        {
            this.email = this.initialEmail;
        }
    },

    mounted()
    {
        console.log("moun"+this.checked)

        this.$nextTick(() =>
        {
            // for old login view only (input in modal)
            if(!isNullOrUndefined(this.$parent.$refs.guestModal))
            {
                this.$parent.$refs.guestModal.addEventListener("hidden.bs.modal", () =>
                {
                    this.email = "";
                    ValidationService.unmarkAllFields(this.$refs.form);
                });
            }

            AutoFocusService.triggerAutoFocus();
        });
    },

    methods:
    {
        validate()
        {
            ValidationService.validate(this.$refs.form)
                .done(() =>
                {   
                    console.log("val"+this.checked)
                    this.authGuest();
                })
                .fail(invalidFields =>
                {
                    ValidationService.markInvalidFields(invalidFields, "error");
                });
        },

        authGuest()
        {
            this.isDisabled = true;
            console.log("auth"+this.checked)


            ApiService.post("/rest/io/guest", { email: this.email })
                .done(() =>
                {
                    navigateTo(
                        isDefined(this.backlink) && this.backlink.length ? decodeURIComponent(this.backlink) : window.location.origin + (App.urls.includeLanguage ? "/" + App.language : "")
                    );
                })
                .fail(() =>
                {
                    this.isDisabled = false;
                });
        }
    }
}
</script>
