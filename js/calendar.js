document.addEventListener("DOMContentLoaded", function () {
	var calendarEl = document.getElementById("calendar");
	var calendar = new FullCalendar.Calendar(calendarEl, {
		initialView: "dayGridMonth",
		events: [
			{
				start: "2023-05-24",
				allDay: true,
				imageUrl: "./images/avatar.jpg",
				description: "asdasdasdsd",
			},
			{
				start: "2023-05-20",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-05-19",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-05-28",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-05-28",
				imageUrl: "https://plus.unsplash.com/premium_photo-1664880019462-b69c41f2dad4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
				allDay: true,
				description: "asdasdsads",
			},
			{
				start: "2023-11-13",
				imageUrl: "https://scontent.fcrk1-5.fna.fbcdn.net/v/t1.6435-9/184930566_3756331287812350_7599127389994636913_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGbL7usUV0V-00SWq5bw4vCi8YWTDi0egCLxhZMOLR6AA-dI4e_eCwynxBfdq7WPfY0uiCxtT9KoVgz6ODDNsgK&_nc_ohc=xzDQEbRAmwgAX8T2CIo&_nc_ht=scontent.fcrk1-5.fna&oh=00_AfBOj7YxA3tQOUzs430zJT0HbZkzFqqQG2EVGRvZSVP6aQ&oe=648ACD78",
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
