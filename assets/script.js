//changes colours of the input fields <textarea> depenfing on the hour.
for (let i = 9; i <= 17; i++) {
    if (i < dayjs().hour()) {
        $(`#${i}`).removeClass('present future').addClass('past');
    } else if (i === dayjs().hour()) {
        $(`#${i}`).removeClass('past future').addClass('present');
    } else {
        $(`#${i}`).removeClass('past present').addClass('future');
    }
}
// Saves tasks when button is clicked 
$('.saveBtn').on('click', function () {
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