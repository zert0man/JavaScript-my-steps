/**
 * Created by zert on 26.03.2016.
 */
$(window).load(function() {
    var date = new Date();

    $.ajax({
        url: "https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5",
        dataType : "json",
        success : function (response) {
            response.forEach( function(item, i, response) {
                var x = document.getElementById('currency');
                var option = document.createElement('option');
                option.textContent = item['base_ccy'] +  " <=> " + item['ccy'];
                option.setAttribute('data-sell', item['sale']);
                option.setAttribute('data-buy', item['buy']);
                x.add(option);


            });
        }
    });

    function isSell() {
        if(getVariant() == 'sell')
            return true;
        return false;
    };

    function getVariant() {
      return $('#variant option:selected').val();
    };

    function getSumInFormat(currency, isSell,fmt) {
        fmt = fmt || 2;
        if (isSell)
            return ($('#money').val() / currency).toFixed(fmt);
        return  ($('#money').val() * currency).toFixed(fmt);
    };

    function eventResult() {
        var cun = $('#currency option:selected').attr('data-'+getVariant());

        $('#result').html( ' = '+ getSumInFormat(cun, isSell()));
    };

    $('.union').on('change', function () {
        eventResult()
    });

    $('#money').keyup(function(event) {
        eventResult()
    }).keydown(function(event) {
        eventResult()
    });
});