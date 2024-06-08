function generateDesign() {
    const designText = document.getElementById('designText').value;
    const fontSelect = document.getElementById('fontSelect').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontColor = document.getElementById('fontColor').value;
    const decorationSelect = document.getElementById('decorationSelect').value;
    const decorationColor = document.getElementById('decorationColor').value;
    const borderStyle = document.getElementById('borderStyle').value;
    const borderColor = document.getElementById('borderColor').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    const backgroundImage = document.getElementById('backgroundImage').files[0];

    const designCanvas = document.getElementById('designCanvas');
    designCanvas.style.fontFamily = fontSelect;
    designCanvas.style.fontSize = fontSize + 'px';
    designCanvas.style.color = fontColor;
    designCanvas.style.border = `2px ${borderStyle} ${borderColor}`;
    designCanvas.style.backgroundColor = backgroundColor;

    if (backgroundImage) {
        const reader = new FileReader();
        reader.onload = function (e) {
            designCanvas.style.backgroundImage = `url(${e.target.result})`;
        };
        reader.readAsDataURL(backgroundImage);
    } else {
        designCanvas.style.backgroundImage = 'none';
    }

    designCanvas.innerHTML = `
        <p>${designText}</p>
        <p style="color: ${decorationColor};">${decorationSelect}</p>
    `;
}

function saveDesign() {
    const designCanvas = document.getElementById('designCanvas').innerHTML;
    // 도안을 임시 저장하는 로직을 추가합니다.
    console.log('임시 저장:', designCanvas);
}

// 이전 버튼 클릭 시 order_page.html로 이동

// 페이지 로드 시 제목을 동적으로 변경
document.addEventListener('DOMContentLoaded', function () {
    const selectedCake = localStorage.getItem('selectedCake');
    const selectedSize = localStorage.getItem('selectedSize');

    if (selectedCake && selectedSize) {
        document.querySelector('header h1').innerText = `${selectedCake} - ${selectedSize}`;
    }
    document.querySelector('.prev-button').addEventListener('click', function () {
        window.location.href = 'order_page.html';
    });
    // 이미지 업로드 및 미리보기 설정
    document.getElementById('fileInput').addEventListener('change', function () {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const imgElement = document.createElement('img');
                imgElement.src = event.target.result;
                imgElement.style.width = '100%';
                imgElement.style.height = '100%';
                imgElement.style.objectFit = 'cover';
                imgElement.style.borderRadius = '50%'; // 이미지를 원형으로 만들기

                const container = document.getElementById('imageUploadCircle');
                container.innerHTML = ''; // 기존 내용을 지우고 이미지만 표시
                container.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });
});
