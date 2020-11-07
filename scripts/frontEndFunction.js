function showTime(){
        let userNameIn = document.getElementById("username").value;
        let classSelection = document.getElementById("programSel").value;
        let lecturerIn = document.getElementById("lecturer").value;
        let dateInput = document.getElementById("picker")
        let yearMon = dateInput.children[0].innerHTML
        let timeSec = dateInput.children[2].innerHTML
        
        document.getElementsByName("dateUp")[0].placeholder = yearMon;
        const regex = /(^[0a-zA-Z])([a-zA-Z\d_]{3,25})/gm;

        document.getElementsByName("dateUp")[0].placeholder = yearMon;
        if (regex.test(userNameIn) == true){
            if (document.getElementsByName("dateUp")[0].placeholder == "YYYY/DD/MM"){
                alert("must input valid date")
            }   else{
                addConsult(lecturerIn, yearMon, timeSec);
            }
        }   else {
            alert("invalid username")
        }
        let consoleObj ={
            'name': userNameIn,
            'classSel': classSelection,
            'lecturer': lecturerIn,
            'year/month': yearMon,
            'time': timeSec
        }
        console.log(consoleObj)
        function addConsult(lecturerIn, yearMon, timeSec) {
            let parentDiv = document.getElementById('consultBox');
            if (lecturerIn == "name"){
                lecturerIn = "Patrick"
            }
            let tempArr = yearMon.split("-");
            let dateOutput= `${tempArr[1]}/${tempArr[2]} - ${timeSec}`
            let consultDetails = `${lecturerIn} - ${dateOutput}`

            let ul1 = document.createElement('ul');
            let li1 =document.createElement('li');

            let span1 = document.createElement('span');
            span1.textContent = consultDetails;

            let iInput = document.createElement('i');
            iInput.className = "fas fa-chevron-circle-right";

            parentDiv.appendChild(ul1);
            ul1.appendChild(li1);
            li1.appendChild(span1);
            li1.appendChild(iInput);
            var element_to_scroll_to = document.getElementById('anchorName');
            element_to_scroll_to.scrollIntoView();
            let consultCounter = document.getElementById('consultNum');
            consultCounter.textContent = (Number(consultCounter.textContent) + 1);
            console.log(consultCounter.textContent)
            notify('success')
        }
}


