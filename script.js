

const userPicEl = document.querySelector(".userPic");
const textEl = document.querySelector(".text");
const nameEl = document.querySelector(".name");

const testimonials = [
    {
        name: "Mihret T.",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis distinctio commodi, ipsam rem itaque quod ab necessitatibus a, iste quasi eveniet officia,incidunt nisi velit praesentium quidem ratione.Error, excepturi.",
        images: "image/2057146364368890049.jpg"
    },
    {
        name: "Anteneh F.",
        text: "Earth comprises distances, great and small; danger and security; open ground and narrow passes; the chances of life and death.",
        images: "image/2596332688943196273.jpg"
    },
    {
        name: "Bereket K.",
        text: "The Commander stands for the virtues of wisdom, sincerely, benevolence, courage and strictness",
        images: "image/2646965706208422611.jpg"
    },
    {
        name: "Kalkidan A.",
        text: "These five heads should be familiar to every general: he who knows them will be victorious; he who knows them not will fail",
        images: "image/2646965706208422612.jpg"
    },
    {
        name: "Kaleb B.",
        text: "If your opponent is of choleric temper, seek to irritate him. Pretend to be weak, that he may grow arrogant.",
        images: "image/5127614391175457577.jpg"
    }
];

idx = 0;

function testimonialTest() {
    const { images, text, name } = testimonials[idx];
    userPicEl.src = images;
    textEl.innerHTML = text;
    nameEl.innerHTML = name;
    idx++;

    if (idx === testimonials.length) {
        idx = 0;
    }

}

setInterval(testimonialTest , 2000)