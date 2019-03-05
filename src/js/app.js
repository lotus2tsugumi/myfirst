$(document).ready(function () {

$('.dropdown-menu a').on('click', function(e){
  var menuVal=$('.dropdown-menu').val();
  alert(menuVal);


});

});

function chngLangFunction() {
  var selectedVal = $('#drpLanguage').val();
  var div = $('#headContent');
  var ul = $('ul');
  var items =[];
  var newhtml='';


  if(selectedVal=="English"){
    //change language here
    $.getJSON("data/English.json", function(data) {
      $.each(data, function(index, val) {
        div.find('#home').text(val.home);
        div.find('#menu').text(val.menu);
        div.find('#selectEng').text(val.selectEng);
        div.find('#selectJp').text(val.selectJp);
        div.find('#selectVn').text(val.selectVn);
        div.find('#contactLink').text(val.contactLink);
        div.find('#btnSearch').text(val.btnSearch);
        div.find('input[type=text]').attr('placeholder', val.searchInput);
      });
  });
  }
  else if(selectedVal=="Japanese"){

    $.getJSON("data/Japanese.json", function(data) {
      $.each(data, function(index, val) {
        div.find('#home').text(val.home);
        div.find('#menu').text(val.menu);
        div.find('#selectEng').text(val.selectEng);
        div.find('#selectJp').text(val.selectJp);
        div.find('#selectVn').text(val.selectVn);
        div.find('#contactLink').text(val.contactLink);
        div.find('#btnSearch').text(val.btnSearch);
        div.find('input[type=text]').attr('placeholder', val.searchInput);
      });
  });

  }
  else if(selectedVal=="Vietnamese"){
    //change language here
    $.getJSON("data/Vietnamese.json", function(data) {
      $.each(data, function(index, val) {
        div.find('#home').text(val.home);
        div.find('#menu').text(val.menu);
        div.find('#selectEng').text(val.selectEng);
        div.find('#selectJp').text(val.selectJp);
        div.find('#selectVn').text(val.selectVn);
        div.find('#contactLink').text(val.contactLink);
        div.find('#btnSearch').text(val.btnSearch);
        div.find('input[type=text]').attr('placeholder', val.searchInput);
      });
  });
  }
}

  
