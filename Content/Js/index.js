document.addEventListener('DOMContentLoaded', function () {
    
    document.querySelectorAll('.edit-pen').forEach(function (pen) {
        pen.addEventListener('click', function () {
            var row = pen.closest('tr');
            var cells = row.querySelectorAll('[data-field]');

            cells.forEach(function (cell) {
                var cellContent = cell.innerText;
                var fieldType = cell.dataset.field; 

                if (fieldType !== 'user') {
                    cell.innerHTML = `<input type="text" value="${cellContent}" class="form-control form-control-sm">`;
                }
            });
            pen.style.display = 'none';
            row.querySelector('.save-btn').style.display = 'inline-block';
        });
    });

    document.querySelectorAll('.save-btn').forEach(function (saveBtn) {
        saveBtn.addEventListener('click', function () {
            var row = saveBtn.closest('tr');
            var cells = row.querySelectorAll('[data-field]'); 

            cells.forEach(function (cell) {
                var input = cell.querySelector('input');
                if (input) {
                    var newValue = input.value;
                    cell.innerHTML = newValue; 
                }
            });

            saveBtn.style.display = 'none';
            row.querySelector('.edit-pen').style.display = 'inline-block';
        });
    });
});



