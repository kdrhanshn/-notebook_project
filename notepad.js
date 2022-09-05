const newMission = document.querySelector('.input-mission');
const newMissionAddBtn = document.querySelector('.btn-mission-add');
const missionList = document.querySelector('.mission-list');

newMissionAddBtn.addEventListener('click',missionAdd);
missionList.addEventListener('click',missionDeleteCompleted);
document.addEventListener('DOMContentLoaded',localStorageOku)
function missionDeleteCompleted(e){
    const tiklanilanEleman = e.target;

    if(tiklanilanEleman.classList.contains('mission-btn-completed')){
        console.log('checked tıklandi');
        tiklanilanEleman.parentElement.classList.toggle('mission-completed');
    }
    if(tiklanilanEleman.classList.contains('mission-btn-delete')){
        console.log('delete tıklandi');
        tiklanilanEleman.parentElement.classList.toggle('kaybol')
        const silinecekGorev = tiklanilanEleman.parentElement.children[0].innerText;
        localStorageSil(silinecekGorev);
        tiklanilanEleman.parentElement.addEventListener('transitionend', function(){
                    tiklanilanEleman.parentElement.remove()

        });
    }

}
function missionAdd(e){
    e.preventDefault();
     //localStorageyekaydet
     missionItemOlustur(newMission.value)
     locaStorageyeKaydet(newMission.value);
     newMission.value = '';
 
    

}
function locaStorageyeKaydet(newMission){
    let missions;
    if(localStorage.getItem('missions')===null){
        missions = [];
    }else{
        missions = JSON.parse(localStorage.getItem('missions'));
    }
    missions.push(newMission);
    localStorage.setItem('missions', JSON.stringify(missions));
}
function localStorageOku(){
    let missions;
    if(localStorage.getItem('missions')===null){
        missions = [];
    }else{
        missions = JSON.parse(localStorage.getItem('missions'));
    }
   missions.foreach(function(mission){
        missionItemOlustur(mission);
   });

}

function missionItemOlustur(mission){
     //div olusturma
     const missionDiv = document.createElement('div');
     missionDiv.classList.add('mission-item');
 
     //li oluşturma
     const missionLi = document.createElement('li');
     missionLi.classList.add('mission-tanim');
     missionLi.innerText = mission;
     missionDiv.appendChild(missionLi)
     //tamamlandı butonu ekle
     const missionCompletedBtn = document.createElement('button');
     missionCompletedBtn.classList.add('mission-btn');
     missionCompletedBtn.classList.add('mission-btn-completed')
     missionCompletedBtn.innerHTML = '<i class= "far fa-check-square"></i>';
     missionDiv.appendChild(missionCompletedBtn);
     //gorev sil butonu
     const missionDeleteBtn = document.createElement('button');
     missionDeleteBtn.classList.add('mission-btn');
     missionDeleteBtn.classList.add('mission-btn-delete')
     missionDeleteBtn.innerHTML = '<i class= "far fa-trash-alt"></i>';
     missionDiv.appendChild(missionDeleteBtn);
 
 
     //ul ye olusturdugumuz divi ekleme
     missionList.appendChild(missionDiv);
}
function localStorageSil(mission){
    let missions;
    if(localStorage.getItem('missions')===null){
        missions = [];
    }else{
        missions = JSON.parse(localStorage.getItem('missions'));
    }
    //splice with item delete
    const silinecekElemanIndex = missions.indexOf(mission);
    console.log(silinecekIndex);
    missions.splice(silinecekElemanIndex,1);
    localStorage.setItem('missions',JSON.stringify(missions));
    
}