let semester1Avg = null;
let semester2Avg = null;

function showSemester(sem) {
  let s1 = document.getElementById("semester1");
  let s2 = document.getElementById("semester2");

  s1.classList.remove("show"); s2.classList.remove("show");
  s1.style.display = "none"; s2.style.display = "none";

  if(sem===1){ s1.style.display="block"; setTimeout(()=>s1.classList.add("show"),10); }
  if(sem===2){ s2.style.display="block"; setTimeout(()=>s2.classList.add("show"),10); }
}

function calculateSemester(sem) {
  let total=0,sumCoef=0;
  let resultDiv=document.getElementById(`result${sem}`);
  resultDiv.classList.remove("show");

  let inputs, elems, i=0;
  if(sem===1){
    inputs=[
      {coef:4,TP:true,TD:true,Exam:true},
      {coef:3,TP:true,TD:true,Exam:true},
      {coef:3,TP:true,TD:true,Exam:true},
      {coef:2,TP:false,TD:true,Exam:true},
      {coef:2,TP:false,TD:true,Exam:true},
      {coef:2,TP:false,TD:true,Exam:true},
      {coef:1,TP:false,TD:false,Exam:true}
    ];
    elems=document.querySelectorAll('#semester1 input');
  } else {
    inputs=[
      {coef:3,TP:true,TD:false,Exam:true},
      {coef:3,TP:true,TD:false,Exam:true},
      {coef:3,TP:true,TD:true,Exam:true},
      {coef:2,TP:false,TD:true,Exam:true},
      {coef:2,TP:false,TD:true,Exam:true},
      {coef:1,TP:false,TD:false,Exam:true},
      {coef:3,TP:true,TD:true,Exam:true}
    ];
    elems=document.querySelectorAll('#semester2 input');
  }

  i=0;
  inputs.forEach(mod=>{
    let tp=mod.TP ? parseFloat(elems[i++].value)||0:0;
    let td=mod.TD ? parseFloat(elems[i++].value)||0:0;
    let exam=mod.Exam ? parseFloat(elems[i++].value)||0:0;

    let tpTdAvg = (mod.TP || mod.TD) ? (tp+td)/(mod.TP && mod.TD ? 2 : 1) : 0;
    let moduleAvg = (mod.TP || mod.TD) ? tpTdAvg*0.4 + exam*0.6 : exam;

    total += moduleAvg*mod.coef;
    sumCoef += mod.coef;
  });

  let average = (total/sumCoef).toFixed(2);

  if(sem===1) semester1Avg=parseFloat(average);
  if(sem===2) semester2Avg=parseFloat(average);

  if(average>=10) resultDiv.innerHTML=`<p style="color:green">Average: ${average} →  ✅</p>`;
  else resultDiv.innerHTML=`<p style="color:red">Average: ${average} →  ❌</p>`;

  setTimeout(()=>resultDiv.classList.add("show"),10);
}

function calculateAnnual(){
  let resultDiv=document.getElementById("resultAnnual");
  resultDiv.classList.remove("show");

  if(semester1Avg===null || semester2Avg===null){
    resultDiv.innerHTML=`<p style="color:red">Please calculate both semesters first!</p>`;
  } else {
    let annual=((semester1Avg+semester2Avg)/2).toFixed(2);
    let color=annual>=10?"green":"red";
    let comment=annual>=10?"Bshtk ✅":"ayayay ❌";
    resultDiv.innerHTML=`<p style="color:${color}">Annual Average: ${annual} → ${comment}</p>`;
  }

  setTimeout(()=>resultDiv.classList.add("show"),10);
}

function toggleTheme(){
  document.body.classList.toggle("dark-mode");
  let btn=document.getElementById("themeToggle");
  btn.textContent=document.body.classList.contains("dark-mode")?"☀️":"🌙";
}
function calculateAnnualDecision() {
  let resultDiv = document.getElementById("resultDecision");
  resultDiv.classList.remove("show");

  if (semester1Avg === null || semester2Avg === null) {
    resultDiv.innerHTML = `<p style="color:red">Please calculate both semesters first!</p>`;
  } else {
    let annual = ((semester1Avg + semester2Avg)/2).toFixed(2);
    let color = annual >= 10 ? "green" : "red";
    let comment = annual >= 10 ? "Admis ✅" : "Ajourné ❌";

    resultDiv.innerHTML = `<p style="color:${color}; font-weight:bold">Annual (S1+S2)/2: ${annual} → ${comment}</p>`;
  }

  setTimeout(() => resultDiv.classList.add("show"), 10);
}
