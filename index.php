<!DOCTYPE html>
<html ng-app>
<head>
	  <meta charset="utf-8">
	<title>JS Step by step</title>
</head>
<body>
	<div>
		<select name="variant" id="variant" class="union">
			<option value="buy">buy</option>
			<option value="sell">sell</option>
		</select>
		<select name="currency" id="currency" class="union">
		</select>
		<input type="text" class="union" id="money" />
		<label for="" id="result"></label>
	</div>
</body>
<script src="js/jquery-2.2.2.min.js"></script>
<!--<script src="/js/libs.js"></script>-->
<!--<script type="text/javascript" src="js/workWithArrayIteration_02_02/reduce.js"></script>-->
<script>
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

		$('.union').on('change', function () {
			var cun = $('#currency option:selected').attr('data-'+$('#variant option:selected').val());

			$('#result').html( ' = '+$('#money').val() * cun);
		});
	});
</script>
</html>