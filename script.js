document.addEventListener('DOMContentLoaded', () => {
    let serialNumber = 1;

    
    //addbtn 
    const addParticipantBtn = document.getElementById('addParticipantBtn');
    
    //addbtn popup-card
    const popup = document.getElementById('popup');

    // close cross 
    const closePopup = document.getElementById('closePopup');

    // event to add participant
    addParticipantBtn.onclick = function () {
        popup.style.display = 'flex';
    }

    // event to close pop up
    closePopup.onclick = function () {
        popup.style.display = 'none';
    }

    // When the user clicks anywhere outside of the popup, close it
    window.onclick = function (event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    }

    // inserting rows in the html
    document.getElementById('participantForm').onsubmit = function (event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const gender = document.getElementById('gender').value;
        const confirmed = document.getElementById('confirmed').value;

        addRow(name, gender, confirmed);
        popup.style.display = 'none';
        document.getElementById('participantForm').reset(); // Reset form 
    }

    function addRow(name, gender, confirmed) {
        const tableBody = document.querySelector('#participantsTable tbody');
        const row = document.createElement('tr');

        if (confirmed === "Yes") {
            row.innerHTML = `
            <td>${serialNumber++}</td>
            <td>${name}</td>
            <td>${gender}</td>
            <td id="confirmedYes"><div style="display:flex; align-items:center; "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="green" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
</svg>${confirmed}</div></td>
            <td>
               <div class="actions">    
                    <button class="btn callBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
Call</button>
                    <button class="btn deleteBtn">Delete</button>
                <div/>
            </td>
        `;
        }
        else {
            row.innerHTML = `
            <td>${serialNumber++}</td>
            <td>${name}</td>
            <td>${gender}</td>
            <td id="confirmedNo"><span>X</span>No</td>
            <td>
               <div class="actions">    
                    <button class="btn callBtn"><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" stroke-width="0.2" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
</svg>
Call</button>
                    <button class="btn deleteBtn">Delete</button>
                <div/>
            </td>
        `;
        }

        tableBody.appendChild(row);

        row.querySelector('.callBtn').addEventListener('click', () => {
            alert(`Calling ${name}...`);
        });


        row.querySelector('.deleteBtn').addEventListener('click', () => {
            tableBody.removeChild(row);
        });
    }
});