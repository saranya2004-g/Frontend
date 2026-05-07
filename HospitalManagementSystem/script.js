function showPage(name) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(b => b.classList.remove('active'));
    document.getElementById('page-' + name).classList.add('active');
    const tabs = ['home','doctors','appointment','emergency','contact'];
    const idx = tabs.indexOf(name);
    if (idx > -1) document.querySelectorAll('.nav-link')[idx].classList.add('active');
    window.scrollTo(0, 0);
  }

  function bookAppointment() {
    const name = document.getElementById('appt-name').value.trim();
    const doctor = document.getElementById('appt-doctor').value;
    const date = document.getElementById('appt-date').value;
    if (!name || !doctor || !date) {
      showToast('Please fill in Name, Doctor, and Date.');
      return;
    }
    showToast('Appointment booked for ' + name + ' with ' + doctor + ' on ' + date + '!');
    document.getElementById('appt-name').value = '';
    document.getElementById('appt-age').value = '';
    document.getElementById('appt-phone').value = '';
    document.getElementById('appt-doctor').value = '';
    document.getElementById('appt-date').value = '';
    document.getElementById('appt-symptoms').value = '';
    document.querySelectorAll('input[name="gender"]').forEach(r => r.checked = false);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3000);
  }