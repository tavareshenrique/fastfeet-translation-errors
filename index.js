function translateErrorMessages(message) {
  switch (message) {
    case "Deliveryman not found.":
      return "Entregador não encontrado.";
    case "Deliveryman already exists.":
      return "Entregador já existe.";
    case "Delivery Problem for this order doesnt exists.":
      return "Problema de entrega para este pedido é inexistente.";
    case "Order not found.":
      return "Pedido não encontrado.";
    case "Start time not allowed.":
      return "Você só pode fazer a retirada entre 08h e 18h do dia.";
    case "It is not possible to start delivery of an order at a future date.":
      return "Não é possível iniciar uma entrega em uma data futura.";
    case "Start date has passed.":
      return "Hora de inicio informada já passou.";
    case "Maximum number of taken per day reached (5).":
      return "Você atingiu o máximo de 5 retiradas por dia. Volte amanhã!";
    case "Signature not informed.":
      return "Assinatura não informada.";
    case "It is not possible to deliver an order at a future date.":
      return "Não é possível entregar uma entrega numa data futura.";
    case "Delivery date has passed.":
      return "Data de entrega informada já passou.";
    case "Password does not match.":
      return "Senha incorreta.";
    case "User not found.":
      return "Usuário não encontrado.";
    case "User already exists.":
      return "Usuário não encontrado.";
    default:
      return "Ops! Tivemos um problema inesperado, tente novamente!";
  }
}

module.exports = {
  translateErrorMessages,
};
