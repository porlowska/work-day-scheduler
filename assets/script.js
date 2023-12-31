$(function() {
    //changes colours of the input fields <textarea> depenfing on the hour.
    for (let i = 9; i <= 17; i++) { // each id of the text is equal to the hour of the event. 
        if (i < dayjs().hour()) {
            $(`#${i}`).removeClass('present future').addClass('past'); // there are 3 css styles, it makes sure that past clasess are deleted so the styling does not colide. 
        } else if (i === dayjs().hour()) {
            $(`#${i}`).removeClass('past future').addClass('present');
        } else {
            $(`#${i}`).removeClass('past present').addClass('future');
        }
    }
    // Saves tasks when button is clicked 
    $('.saveBtn').click(function () {
        let eventTime = $(this).siblings('textarea').attr('id');
        let eventTask = $(this).siblings('textarea').val();
        localStorage.setItem(eventTime, eventTask);
    });

    // loads from loacal storage
    $('.description').each(function () {
        let eventTime = $(this).attr('id');
        let savedEvent = localStorage.getItem(eventTime);
        $(this).text(savedEvent);
    });
});