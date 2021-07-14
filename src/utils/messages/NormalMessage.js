import Swal from "sweetalert2"

export default function NormalMessage(title, type) {
  Swal.fire({
    icon: type,
    title: title,
    timer: 1200,
    showConfirmButton: false
  })
}
