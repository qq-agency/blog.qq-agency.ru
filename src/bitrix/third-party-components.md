# Правообладатели

Начиная с версии `20.200.0` Главного модуля появилась страница «Правообладатели» (`/bitrix/admin/copyright.php`).

На ней перечислены лицензии используемых компонентов.

![](/images/third-party-components/1.png)

## Добавление собственного компонента

Чтобы добавить свой компонент в список, необходимо зарегистрировать обработчик события:

```php
<?php 

use Bitrix\Main\EventManager;
use Bitrix\Main\EventResult;
use Bitrix\Main\UI\Copyright;

$eventManager = EventManager::getInstance();
$eventManager->addEventHandler(
    'main',
    'onGetThirdPartySoftware',
    function () {
        return new EventResult(
            EventResult::SUCCESS, [
                (new Copyright('Модуль интеграции с Тинькофф'))
                    ->setProductUrl('https://github.com/saundefined/tinkoff-sdk')
                    ->setCopyright("Copyright 2020, Sergey Panteleev")
                    ->setLicence(Copyright::LICENCE_MIT)
                    ->setLicenceUrl('https://github.com/saundefined/tinkoff-sdk/blob/master/LICENSE.md'),
    
                (new Copyright('Модуль СМС-сервисы'))
                    ->setProductUrl('https://github.com/qq-agency/ps.sms')
                    ->setCopyright("Copyright 2020, QQ")
                    ->setLicence(Copyright::LICENCE_MIT)
                    ->setLicenceUrl('https://github.com/qq-agency/ps.sms/blob/master/LICENSE.md'),
            ]
        );
    }
);
```

![](/images/third-party-components/2.png)

## Допустимые лицензии

| Лицензия | Код | Ссылка по умолчанию |
|:---------|:----|:--------------------|
| MIT | `LICENCE_MIT` | [https://opensource.org/licenses/MIT](https://opensource.org/licenses/MIT) |
| Commercial | `LICENCE_COMMERCIAL` | |
| Public Domain | `LICENCE_PUBLIC_DOMAIN` | |
| 2-Clause BSD | `LICENCE_BSD2` | [https://opensource.org/licenses/BSD-2-Clause](https://opensource.org/licenses/BSD-2-Clause) |
| 3-Clause BSD | `LICENCE_BSD3` | [https://opensource.org/licenses/BSD-3-Clause](https://opensource.org/licenses/BSD-3-Clause) |
| Apache License, Version 2.0 | `LICENCE_APACHE2` | [http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0) |
| W3C License | `LICENCE_W3C` | [https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document](https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document) |
| General Public License, version 2 | `LICENSE_GPLV2` | [https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt](https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt) |
| Пользовательская лицензия | `LICENCE_CUSTOM` | |
