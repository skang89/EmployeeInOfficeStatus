$(document).ready(function () {
  $.getJSON('https://raw.githubusercontent.com/skang89/EmployeeInOfficeStatus/a32ca332e1cfc883f7ebafbedb5c23531cc8b9e6/data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
  $.getJSON('https://raw.githubusercontent.com/skang89/EmployeeInOfficeStatus/a32ca332e1cfc883f7ebafbedb5c23531cc8b9e6/data/rooms.json', function (data) {
    var statusHTML = '<ul class="rooms">';
    $.each(data,function (index, rooms) {
      if (rooms.available === true) {
        statusHTML +='<li class="empty">';
      } else {
        statusHTML +='<li class="full">';
      }
      statusHTML += rooms.room + '</li>';
    });
    statusHTML += '</ul>';
    $('#roomList').html(statusHTML)
  }); // end getJSON
}); // end ready
