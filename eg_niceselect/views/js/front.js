/**
* 2007-2021 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author    PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2021 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

$(document).ready(function() {
    $('.product-variants select').niceSelect();
    var jsLang = document.documentElement.lang.toLowerCase();
    var option_0 = '' ;
    switch (jsLang) { 
	case 'fr': 
		option_0 = 'sélectionner une taille';
		break;
	case 'en': 
		option_0 = 'Select a size';
                break;
	case 'it': 
		option_0 = 'Seleziona una taglia';
                break;
	case 'de': 
		option_0 = 'Wähle eine größe';	
		break;
	default:
		option_0 = 'sélectionner une taille';
   }
    $('.nice-select').prepend( "<p class='select-title'>"+option_0+"</p>" );
    $('.current').css('display', 'none');
    $(document).ajaxComplete(function() {
        $('.product-variants select').niceSelect();
        $('.nice-select').addClass( 'open');
      
        $('select').on('change', function() {
                   $('.nice-select').prepend( "<p>"+$('.option.selected').text()+"</p>" );
        });
    });
});