function m(cc, exam) {
    return cc * 0.4 + exam * 0.6;
}

function calcS1() {
    let total =
        m((+s1_bio_td.value + +s1_bio_tp.value)/2, s1_bio_exam.value) * 4 +
        m(s1_math_td.value, s1_math_exam.value) * 2 +
        m((+s1_chim_td.value + +s1_chim_tp.value)/2, s1_chim_exam.value) * 3 +
        m((+s1_geo_td.value + +s1_geo_tp.value)/2, s1_geo_exam.value) * 3 +
        m(s1_tc_td.value, s1_tc_exam.value) * 2 +
        m(s1_mtd_td.value, s1_mtd_exam.value) * 2 +
        s1_hist_exam.value * 1;

    let avg = total / 17;
    resS1.innerText = "Semester 1 Average = " + avg.toFixed(2);
}

function calcS2() {
    let total =
        m(s2_thermo_cc.value, s2_thermo_exam.value) * 3 +
        m(s2_veg_tp.value, s2_veg_exam.value) * 3 +
        m(s2_anim_tp.value, s2_anim_exam.value) * 3 +
        m(s2_phy_cc.value, s2_phy_exam.value) * 3 +
        m(s2_tc_td.value, s2_tc_exam.value) * 2 +
        m(s2_snv_td.value, s2_snv_exam.value) * 2 +
        s2_mtd_exam.value * 1;

    let avg = total / 17;
    resS2.innerText = "Semester 2 Average = " + avg.toFixed(2);
}
/* ===== SEMESTER SWITCH ===== */
function showSemester(n) {
    document.getElementById("semester1").classList.remove("show");
    document.getElementById("semester2").classList.remove("show");

    document.querySelectorAll(".tab").forEach(b => b.classList.remove("active"));

    document.getElementById("semester" + n).classList.add("show");
    document.querySelectorAll(".tab")[n - 1].classList.add("active");
}

/* ===== DARK / LIGHT THEME ===== */
function toggleTheme() {
    document.body.classList.toggle("dark");
    const btn = document.getElementById("themeBtn");
    if(document.body.classList.contains("dark")) {
        btn.innerText = "☀️ Light Mode";
    } else {
        btn.innerText = "🌙 Dark Mode";
    }
}

/* ===== HELPER: MODULE CALC ===== */
function m(cc, exam) {
    return cc*0.4 + exam*0.6;
}

/* ===== SEMESTER 1 CALC ===== */
function calcS1() {
    // Replace with your actual Semester 1 input IDs
    let total =
        m((+s1_bio_td.value + +s1_bio_tp.value)/2, s1_bio_exam.value) * 4 +
        m(s1_math_td.value, s1_math_exam.value) * 2 +
        m((+s1_chim_td.value + +s1_chim_tp.value)/2, s1_chim_exam.value) * 3 +
        m((+s1_geo_td.value + +s1_geo_tp.value)/2, s1_geo_exam.value) * 3 +
        m(s1_tc_td.value, s1_tc_exam.value) * 2 +
        m(s1_mtd_td.value, s1_mtd_exam.value) * 2 +
        s1_hist_exam.value * 1;

    let avg = total / 17;
    const res = document.getElementById("resS1");

    if(avg >= 10){
        res.innerHTML = `<span class="result pass">Bshtek yal khebache - ${avg.toFixed(2)}</span>`;
    } else {
        res.innerHTML = `<span class="result fail">Nod t9ra - ${avg.toFixed(2)}</span>`;
    }
}

/* ===== SEMESTER 2 CALC ===== */
function calcS2() {
    // Replace with your actual Semester 2 input IDs
    let total =
m((+s2_thermo_td.value + +s2_thermo_tp.value)/2, s2_thermo_exam.value) * 3 +
        m(s2_veg_tp.value, s2_veg_exam.value) * 3 +
        m(s2_anim_tp.value, s2_anim_exam.value) * 3 +
m((+s2_phy_td.value + +s2_phy_tp.value)/2, s2_phy_exam.value) * 3 +
        m(s2_tc_td.value, s2_tc_exam.value) * 2 +
        m(s2_snv_td.value, s2_snv_exam.value) * 2 +
        s2_mtd_exam.value * 1;

    let avg = total / 17;
    const res = document.getElementById("resS2");

    if(avg >= 10){
        res.innerHTML = `<span class="result pass">Bshtek yal khebache - ${avg.toFixed(2)}</span>`;
    } else {
        res.innerHTML = `<span class="result fail">Nod t9ra - ${avg.toFixed(2)}</span>`;
    }
}
function showSemester(n) {
    const sem1 = document.getElementById("semester1");
    const sem2 = document.getElementById("semester2");
    const tabs = document.querySelectorAll(".tab");

    // Hide both semesters
    sem1.classList.remove("show");
    sem2.classList.remove("show");

    // Remove active class from all buttons
    tabs.forEach(b => b.classList.remove("active"));

    // Show selected semester and highlight button
    if(n === 1){
        sem1.classList.add("show");
        tabs[0].classList.add("active");
    } else {
        sem2.classList.add("show");
        tabs[1].classList.add("active");
    }
}
function changeBackground() {
    const theme = document.getElementById("bgTheme").value;
    document.body.classList.remove("gradient", "gradientAnim", "pattern", "image");
    document.body.classList.add(theme);
}
