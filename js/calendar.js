document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		events: [
			{
				start: "2023-06-04",
				allDay: true,
				imageUrl: "./images/avatar.jpg",
				description: "asdasdasdsd",
			},
			{
				start: "2023-06-06",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-06-06",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-06-07",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-06-09",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
		],

		eventContent: function (arg) {
			if (arg.event.extendedProps.imageUrl) {
				var imageUrl = arg.event.extendedProps.imageUrl;
				var imageHtml = '<img src="' + imageUrl + '" alt="' + arg.event.title + '" style="width: 50px;height:50px; border-radius: 50%;"/>';
				var titleHtml = '<div style="margin-top: 10px;">' + arg.event.title + "</div>";
				return {
					html: imageHtml + titleHtml,
				};
			} else {
				return {
					text: arg.event.title,
				};
			}
		},
	});
	calendar.render();
	const calendarAvatar = document.querySelectorAll(".fc-event-main");
	calendarAvatar.forEach((avatar) => {
		avatar.setAttribute("href", "#birthday-greeting");
		avatar.setAttribute("uk-toggle", "");
	});
});
