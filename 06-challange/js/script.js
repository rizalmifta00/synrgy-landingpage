let color = ['#fc0303', '#fcc203', '#03fc03', '#2596be', '#e28743', '#abdbe3', '#063970', '#44bcd8', '#80391e',
'#6780a8'
];
const box = document.querySelectorAll(".box");

for (let i = 0; i < color.length; i++) {
box[i].style.backgroundColor = color[i];
}