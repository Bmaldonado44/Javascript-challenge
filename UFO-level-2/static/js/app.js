showData(data);
d3.selectAll('input').on('change', handleChange);
d3.select('button').on('click', handleClick);
var fitleredData = data;


function showData(data) {
    d3.select('tbody').html('');

    data.forEach(obj => {
        var row = d3.select('tbody').append('tr');
        Object.values(obj).forEach(val => {
            var cell = row.append('td');
            cell.text(val);
        });    
    });
};

function handleChange() {
    var key = d3.select(this).attr('id');
    var value = d3.select(this).property('value');
    fitleredData = fitleredData.filter(obj => obj[key]  == value);
    showData(fitleredData);
};

function handleClick() {
    d3.selectAll('input').property('value','');
    fitleredData = data;
    showData(data);
};