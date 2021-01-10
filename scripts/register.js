function register() {
  if (checkCompletion()) {
    if (checkEmail()) {
      var url =
        'https://jack-margeson-cincyhacks-2020-registration.glitch.me/register' +
        '?array=' +
        document.getElementById('FirstName').value +
        '&array=' +
        document.getElementById('LastName').value +
        '&array=' +
        document.getElementById('PreferredName').value +
        '&array=' +
        document.getElementById('Email').value +
        '&array=' +
        document.getElementById('PhoneNumber').value +
        '&array=' +
        document.getElementById('School').value +
        '&array=' +
        document.getElementById('Grade').value +
        '&array=' +
        document.getElementById('Age').value +
        '&array=' +
        document.getElementById('Address').value +
        '&array=' +
        document.getElementById('City').value +
        '&array=' +
        document.getElementById('State').value +
        '&array=' +
        document.getElementById('ZIP').value +
        '&array=' +
        '' +
        '&array=' +
        '' +
        '&array=' +
        document.getElementById('Pronouns').value +
        '&array=' +
        document.getElementById('ShirtSize').value +
        '&array=' +
        '' +
        '&array=' +
        document.getElementById('Referral').value +
        '&array=' +
        document.getElementById('Other').value
      console.log(url)
      fetch(url).then(function(response) {
        console.log(response.ok)
        if (response.ok) {
          subscribe()
        }
      })
    }
  }
}
function checkEmail() {
  if (
    document.getElementById('Email').value ==
    document.getElementById('CheckEmail').value
  ) {
    return true
  } else {
    alert('The emails that you have entered do not match.')
    return false
  }
}
function subscribe() {
  var url =
    'https://jack-margeson-cincyhacks-2020-registration.glitch.me/subscribe' +
    '?name=' +
    document.getElementById('PreferredName').value +
    ' ' +
    document.getElementById('LastName').value +
    '&email=' +
    document.getElementById('Email').value
  fetch(url).then(function(response) {
    if (response.ok) {
      redirect()
    }
  })
}
function redirect() {
  window.location.replace('/complete.html')
}
function checkCompletion() {
  if (
    document.getElementById('FirstName').value &&
    document.getElementById('LastName').value &&
    document.getElementById('Email').value &&
    document.getElementById('PhoneNumber').value &&
    document.getElementById('School').value &&
    document.getElementById('Grade').value &&
    document.getElementById('Age').value &&
    document.getElementById('Address').value &&
    document.getElementById('City').value &&
    document.getElementById('State').value &&
    document.getElementById('ZIP').value &&
    document.getElementById('Pronouns').value &&
    document.getElementById('ShirtSize').value &&
  ) {
    return true
  } else {
    alert('Please complete all required elements.')
    return false
  }
}
