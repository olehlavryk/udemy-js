// Form
function form() {
    
    let message = {
        loading: "Loading ...",
        success: "Thanks! Soon we call to you.",
        faillure: "Error, something wrong ..."
    }

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div');

        statusMessage.classList.add('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        form.appendChild(statusMessage);

        function postData(data) {

            return new Promise(function(resolve, reject){
                let request = new XMLHttpRequest();
                request.open('POST', 'server.php');
                request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
               
                request.addEventListener('readystatechange', function(){
                    if(request.readyState < 4) {
                        resolve();
                        
                    } else if(request.readyState === 4 && request.status == 200) {
                        resolve();
                        
                    } else {
                        reject();
                        
                    }
                });

                request.send(data);
            });

            
        }

        function clearInputs() {
            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }
        }

        let formData = new FormData(form);
        let obj = {};
        formData.forEach((value, key) => {
            obj[key] = value;
        });

        let json = JSON.stringify(obj);

        postData(json)
            .then(() => statusMessage.innerHTML = message.loading)
            .then(() => statusMessage.innerHTML = message.success)
            .catch(() => statusMessage.innerHTML = message.faillure)
            .then(() => clearInputs());
    });
}

module.exports = form;