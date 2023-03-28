const item = document.getElementById('item');
const placeHolders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart',dragStartProcess);
item.addEventListener('dragend',dragEndProcess);


for(const placeholder of placeHolders){

    placeholder.addEventListener('dragover', dragOverProcess  );
    placeholder.addEventListener('dragenter',  dragEnterProcess );
    placeholder.addEventListener('dragleave', dragLeaveProcess   );
    placeholder.addEventListener('drop',  dragDropProcess  );
};



function dragStartProcess(event){
//console.log(event.target);
event.target.classList.add('hold');
setTimeout(()=> event.target.classList.add('hide'),0);

};


function dragEndProcess(event){
    event.target.classList.remove('hold');
    event.target.classList.remove('hide');
};


function dragOverProcess(event){
event.preventDefault();
};

function dragEnterProcess(event){
    event.target.classList.add('hovered');
};

function dragLeaveProcess(event){
    event.target.classList.remove('hovered');
};

function dragDropProcess(event){
    event.target.append(item);
    event.target.classList.remove('hovered');
};