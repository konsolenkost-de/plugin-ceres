<template>
    <div>
        <form ref="form" method="post" class="mb-3 login-pwd-reset">
            <div class="input-unit" data-validate="mail">
                <input type="email" name="email" autocomplete="email" data-testing="guest-login-input" :id="_uid" v-model="email" data-autofocus>
                <label :for="_uid">{{ $translate("Ceres::Template.loginEmail") }}*</label>
            </div>
            <span class="error-msg">{{ $translate("Ceres::Template.loginEnterConfirmEmail") }}</span>
            
            <div class="col-12" v-if="enableConfirmingPrivacyPolicy">
                <accept-privacy-policy-check class="mt-3 mb-0" v-model="privacyPolicyAccepted" @input="privacyPolicyValueChanged($event)" :show-error="privacyPolicyShowError"></accept-privacy-policy-check>
            </div>

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
import AcceptPrivacyPolicyCheck from "../AcceptPrivacyPolicyCheck.vue";

export default {
    name: "guest-login",

    mixins: [ButtonSizePropertyMixin],
    components:
    {
        AcceptPrivacyPolicyCheck
    },

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
            privacyPolicyAccepted : false,
            privacyPolicyShowError: false,

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
                    if (!this.enableConfirmingPrivacyPolicy || this.privacyPolicyAccepted)
                            {
                    this.authGuest();
                            }else
                            {
                                this.privacyPolicyShowError = true;

                                NotificationService.error(
                                    this.$translate("Ceres::Template.contactAcceptFormPrivacyPolicy", { hyphen: "&shy;" })
                                );
                                this.resetRecaptcha();
                            }
                })
                .fail(invalidFields =>
                {
                    ValidationService.markInvalidFields(invalidFields, "error");
                    if (this.enableConfirmingPrivacyPolicy && !this.privacyPolicyAccepted)
                    {
                        this.privacyPolicyShowError = true;

                        NotificationService.error(
                            this.$translate("Ceres::Template.contactAcceptFormPrivacyPolicy", { hyphen: "&shy;" })
                        );
                    }
                });
        },

        authGuest()
        {
            this.isDisabled = true;

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
        },
        privacyPolicyValueChanged(value)
        {
            this.privacyPolicyAccepted = value;

            if (value)
            {
                this.privacyPolicyShowError = false;
            }
        },
    }
}
</script>
