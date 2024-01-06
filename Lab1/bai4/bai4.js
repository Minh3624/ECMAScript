'use strict';
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')
    .then(function (response) {
        response.json().then(function (data) {
            let api = '';
            console.log(data);
            const apiData = data.data;
            for (let i = 0; i < apiData.length; i++) {
                api += `
                <tr>
                <td>${apiData[i]["ID Nation"]}</td>
                <td>${apiData[i].Nation}</td>
                <td>${apiData[i]["ID Year"]}</td>
                <td>${apiData[i].Year}</td>
                <td>${apiData[i].Population}</td>
                </tr>
                `;
            }
            document.getElementById('tableBody').innerHTML = api;
            // const outputElement = document.getElementById("output");
            // if (data && data.data && data.data.length > 0) {
            //     // Lấy phần tử tbody để thêm dữ liệu vào
            //     const tableBodyElement = document.getElementById("tableBody");
            //     // Duyệt qua từng phần tử trong mảng và thêm vào tbody
            //     data.data.forEach(function (item, index) {
            //         const row = tableBodyElement.insertRow();
            //         const Index = row.insertCell(0);
            //         Index.innerHTML = index + 1;
            //         const Nationality = row.insertCell(1);
            //         Nationality.innerHTML = item.Nation;
            //         const Year = row.insertCell(2);
            //         Year.innerHTML = item.Year;
            //         const Population = row.insertCell(3);
            //         Population.innerHTML = item.Population;
            //     });
            // } else {
            //     console.log('Không có dữ liệu hoặc mảng dữ liệu trống.');
            // }
        });
    })
    .catch(function (error) {
        console.log(error);
    })
// const response = document.querySelector(".myclass").then(function (response) { });

// document.getElementById('id').then(function (response) { });  
fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')
    .then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            // const outputElement = document.getElementById("output");
            if (data && data.length > 0) {
                // Lấy phần tử tbody để thêm dữ liệu vào
                const tableBodyElement = document.getElementById("tableBodys");
                // Duyệt qua từng phần tử trong mảng và thêm vào tbody
                data.forEach(function (item) {
                    // tạo bản
                    const row = tableBodyElement.insertRow();
                    const Id = row.insertCell(0);
                    Id.innerHTML = item.id;
                    const Avatar = row.insertCell(1);
                    const avatarImg = document.createElement("img");
                    avatarImg.src = item.avatar; // Đường dẫn đến ảnh từ dữ liệu API
                    Avatar.appendChild(avatarImg);
                    const Name = row.insertCell(2);
                    Name.innerHTML = item.name;
                    const CreatedAt = row.insertCell(3);
                    CreatedAt.innerHTML = item.createdAt;
                });
            } else {
                console.log('Không có dữ liệu hoặc mảng dữ liệu trống.');
            }
        });
    })
    .catch(function (error) {
        console.log(error);
    })
// const response = document.querySelector(".myclass").then(function (response) { });

// document.getElementById('id').then(function (response) { });  