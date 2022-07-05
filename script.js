var today = moment();
var currentTime = moment().format('llll')
$("#currentDay").text(today.format(" dddd, MMMM YYYY"));
var hour = today.format('HH');
// console.log(hour) ;
var colorBlock = [
    { 'id':$('#text09'), 'time': '09'},
    { 'id':$('#text10'), 'time': '10'},
    { 'id':$('#text11'), 'time': '11'},
    { 'id':$('#text12'), 'time': '12'},
    { 'id':$('#text13'), 'time': '13'},
    { 'id':$('#text14'), 'time': '14'},
    { 'id':$('#text15'), 'time': '15'},
    { 'id':$('#text16'), 'time': '16'},
    { 'id':$('#text17'), 'time': '17'}
]
function colorCode(){
    for(i=0; i< colorBlock.length; i++){
        if (hour === colorBlock[i].time) {
            colorBlock[i].id.addClass('present');
        }
        if(hour> colorBlock[i].time) {
            colorBlock[i].id.addClass('past');
        } 
        if (hour< colorBlock[i].time) {
            colorBlock[i].id.addClass('future');
        }       
    }
}


function textApply () {
    for (var i=9; i< 17; i++) {
        if(i === 9){
            var lsVal = localStorage.getItem(`text0${i}`);
            console.log(lsVal);
            var lsVal2 = document.getElementById(`text0${i}`);
            console.log(lsVal2);
            lsVal2.textContent = lsVal;
        } else {
            var lsVal = localStorage.getItem(`text${i}`);
            console.log(lsVal);
            var lsVal2 = document.getElementById(`text${i}`);
            console.log(lsVal2);
            lsVal2.textContent = lsVal;
         
        }
    }
    
}




$('.saveBtn').on('click', function(e) {
    e.preventDefault();
    var id = $(this).siblings('textarea').attr('id');
    var textInput = $(this).siblings('.description').val();
    // console.log(id);
    // console.log(textInput);
    localStorage.setItem(id, textInput);
    var retrievels = localStorage.getItem(id);
    // console.log(retrievels);

    $(this).siblings('textarea').text(retrievels);

})

colorCode();
textApply();



