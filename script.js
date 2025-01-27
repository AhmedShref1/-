$(document).ready(function() {

    //Hide result div 
    $('#result').hide();

    //Initializing currentVideo variable And Start The First Video
    let currentVideo = 1;

    $('#genderForm').on('submit', function(event) {
        //prevent Page Reload
        event.preventDefault();
        
        var name = $('#name').val();
        var gender = $('input[name="gender"]:checked').val();
        var result;
        //Male
        if (gender === 'ذكر') {result = name + ' ءلءوي';}
        //Female
        else if (gender === 'أنثى') {result = name + ' ءلءوية';}    

        //Show Vid1
        if (currentVideo === 1) {
            $('#video1').show();
            $('#video2').hide();
            //Declare vid1 & vid2
            var video1 = document.getElementById('video1');
            var video2 = document.getElementById('video2');
            video2.pause();
            //Reset Time Of Video To 0 When Press Again On The Button
            video1.currentTime = 0;
            //Play Video
            video1.play();
            //Switch To vid2 When Press Again On The Button
            currentVideo = 2;
        }
        //Show Vid2
        else {
            $('#video2').show();
            $('#video1').hide();
            //Declare vid2 & vid1
            var video2 = document.getElementById('video2');
            var video1 = document.getElementById('video1');
            video1.pause();
            //Reset Time Of Video To 0 When Press Again On The Button
            video2.currentTime = 0;
            //Play Video
            video2.play();
            //Switch To vid1 When Press Again On The Button
            currentVideo = 1;
        }

        //Display Result In result div
        $('#result').text(result).fadeIn();
    });
});