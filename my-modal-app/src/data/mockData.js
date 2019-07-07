import { faInfoCircle, faCheckCircle, faExclamationTriangle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'

export const paragraph = "Taco cat backwards spells taco cat. Chew foot behind the couch. Kick up litter. Chase after silly colored fish toys around the house chase mice, yet see owner, run in terror i love cuddles. Stinky cat wake up wander around the house making large amounts of noise jump on top of your human's bed and fall asleep again and throwup on your pillow, but meow meow mewl for food at 4am and put butt in owner's face. Claw drapes slap owner's face at 5am until human fills food dish lick yarn hanging out of own butt. Fart in owners food meoooow need to check on human, ";

const modalInfo = "info";
const modalSuccess = "success";
const modalAlert = "alert";
const modalDanger = "danger";

// j'aurai créer une interface si cela avait été en typeScript :)
export const modals = {
    [modalInfo]: {
      name: modalInfo,
      closeable: true,
      closeOnOutsideClick: true, 
      state: modalInfo + "Modal",
      title: "Ceci est le titre d'une modale info",
    },
    [modalSuccess]: {
      name: modalSuccess,
      closeable: true,
      closeOnOutsideClick: true,
      state: modalSuccess + "Modal",
      title: "Ceci est le titre d'une modale succès"
    },
    [modalAlert]: {
      name: modalAlert,
      closeable: false,
      closeOnOutsideClick: false,
      state: modalAlert + "Modal",
      title: "Ceci est le titre d'une modale d'alerte"
    },
    [modalDanger]: {
      name: modalDanger,
      closeable: false,
      state: modalDanger + "Modal",
      title: "Ceci est le titre d'une modale de Danger"
    }
  }

  export const modalIcon = {
    [modalInfo]: faInfoCircle,
    [modalSuccess]: faCheckCircle,
    [modalAlert]: faExclamationTriangle,
    [modalDanger]: faExclamationCircle,
  }