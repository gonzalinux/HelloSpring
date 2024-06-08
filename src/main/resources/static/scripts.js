// survey screen scripts

document.addEventListener("DOMContentLoaded", function() {
    function updateValue() {
        var slider = document.getElementById("range1");
        var value = document.getElementById("value1");
        var slider2 = document.getElementById("range2");
        var value2 = document.getElementById("value2");
        value.textContent = slider.value;
        value2.textContent = slider2.value;
    }

    updateValue();

    // shows a final warning to the user if not all fields are completed

    function showFinalWarning() {
        let data = new FormData(document.getElementById('musicForm'));
        var completed = true;
        for (let i=3; i <=13; i++){
            var question = 'question' + i;
            if (!data.has(question) || !data.get(question)) {
                completed = false;
                break;
            }
        }

        var finalWarning = document.getElementById('finalWarning');
            if (completed){
                finalWarning.setAttribute("hidden", true);
            } else {
                finalWarning.removeAttribute('hidden');
            }
    }

    setInterval(showFinalWarning, 500);


    document.getElementById('range1').addEventListener('input', updateValue);
    document.getElementById('range2').addEventListener('input', updateValue);

    // shows a warning for each question if the field is not completed

    document.getElementById('musicForm').addEventListener('submit', function(e) {

        e.preventDefault();
        let data = new FormData(this);
        var completed = true;
        for (let i=3; i <=13; i++){
            var question = 'question' + i;
            var warning = document.getElementById('warning' + i);
            if (!(data.has(question) && data.get(question))){
                completed = false;
                warning.removeAttribute('hidden')
            } else {
                warning.setAttribute("hidden", true);
            }
        }

        if (completed) {
            let jsonData = {};
        data.forEach((value, key) => {
            jsonData[key] = value;
        });
        fetch('https://dani13.free.beeceptor.com', {
            method: 'POST', 
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json)
        .then(data => {
            console.log(data);
            var currentPath = window.location.pathname;

            if (currentPath.includes("survey-es.html")) {
                window.location.href = "submitted-es.html";
            } else {
                window.location.href = "submitted.html";
            }
        })
        .catch(error => {
            console.error('Error:', error); 
            alert('Survey not sent, please retry');
        });
        
        }
    
    });
});


// submitted screen scripts

function dissapearX(){
    var xIcon = document.getElementById('icon-x');
    var twitterIcon = document.getElementById('icon-t');
    xIcon.style.display = 'none';
    twitterIcon.style.display = 'flex';
}

function appearX(){
    var xIcon = document.getElementById('icon-x');
    var twitterIcon = document.getElementById('icon-t');
    xIcon.style.display = 'flex';
    twitterIcon.style.display = 'none';
}


