const newMission = document.querySelector('.input-mission');
const newMissionAddBtn = document.querySelector('.btn-mission-add');
const missionList = document.querySelector('.mission-list');

newMissionAddBtn.addEventListener('click',missionAdd);
missionList.addEventListener('click',missionDeleteCompleted);
function missionDeleteCompleted(e){
    const tiklanilanEleman = e.target;

    if(tiklanilanEleman.classList.contains('mission-btn-completed')){
        console.log('checked tıklandi');
        tiklanilanEleman.parentElement.classList.toggle('mission-completed');
    }
    if(tiklanilanEleman.classList.contains('mission-btn-delete')){
        console.log('delete tıklandi');
        tiklanilanEleman.parentElement.classList.toggle('kaybol')
        //tiklanilanEleman.parentElement.remove()
        tiklanilanEleman.parentElement.addEventListener('transitionend', function(){
                    tiklanilanEleman.parentElement.remove()

        });
    }

}
function missionAdd(e){
    e.preventDefault();

    //div olusturma
    const missionDiv = document.createElement('div');
    missionDiv.classList.add('mission-item');

    //li oluşturma
    const missionLi = document.createElement('li');
    missionLi.classList.add('mission-tanim');
    missionLi.innerText = newMission.value;
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

    newMission.value = '';

    //ul ye olusturdugumuz divi ekleme
    missionList.appendChild(missionDiv);

}