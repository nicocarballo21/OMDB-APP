import Swal from "sweetalert2"

export default function DelayMessage(message_1, message_2, type, user = null) {
  Swal.fire({
    title: message_1
  })
  Swal.showLoading()

  setTimeout(() => {
    Swal.close()
    Swal.fire({
      icon: type,
      title: message_2,
      text: user ? `Welcome ${user}!!` : "",
      showConfirmButton: false,
      timer: 1200
    })
  }, 1200)
}
