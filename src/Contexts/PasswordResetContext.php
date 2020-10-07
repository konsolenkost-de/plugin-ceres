<?php

namespace Ceres\Contexts;

use IO\Helper\ContextInterface;

class PasswordResetContext extends GlobalContext implements ContextInterface
{
    public $contactId;
    public $hash;
    public $category;

    public function init($params)
    {
        parent::init($params);

        $this->hash = $this->getParam( 'hash');
        $this->contactId = $this->getParam( 'contactId');
        $this->category = $this->getParam('category');
    }
}
