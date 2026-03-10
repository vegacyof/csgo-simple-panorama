'use strict';

var AdvertisingToggle = ( function()
{
    var _Init = function()
    {
        var elBtn = $.GetContextPanel().FindChildInLayoutFile( 'HireAdvertisingToggle' );
        if (elBtn)
        {
            var container = elBtn.GetParent();
            if (container)
            {
                container.DeleteAsync(0);
            }
        }
    };
    
    var _OnActivate = function() { return; };
    var _UpdateToggle = function() { return; };
    var UpdateTooltip = function() { return; };

    return {
        Init: _Init,
        OnActivate: _OnActivate,
        UpdateToggle: _UpdateToggle
    };

} )();

( function()
{
    AdvertisingToggle.Init();
} )();                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    