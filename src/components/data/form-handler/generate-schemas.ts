export interface IDefaultSchemas {
  name?: boolean | undefined
  date?: boolean | undefined
  loja?: boolean | undefined
  email?: boolean | undefined
  phone?: boolean | undefined
  login?: boolean | undefined
  message?: boolean | undefined
  subject?: boolean | undefined
  password?: boolean | undefined
  lastName?: boolean | undefined
}

export async function generateSchemasByDemand(defaultSchemas: IDefaultSchemas | undefined) {
  const yup = await import('yup')

  // eslint-disable-next-line prefer-const
  let schema = {}

  const schemas = {
    name: yup.string().required('Por favor, digite seu nome'),
    date: yup.string().required('Por favor, digite uma data'),
    loja: yup.string().required('Por favor, selecione uma loja'),
    login: yup.string().required('Por favor, digite seu usuário'),
    password: yup.string().required('Por favor, digite uma senha'),
    subject: yup.string().required('Por favor, digite uma assunto'),
    message: yup.string().required('Por favor, digite uma mensagem'),
    lastName: yup.string().required('Por favor, digite seu último nome'),
    email: yup.string().required('Por favor, digite um email').email('Por favor, digite um email válido'),
    phone: yup.string().min(11, 'Por favor, digite um número válido').required('Por favor, digite um número'),
  }

  if (!defaultSchemas) {
    return {}
  }

  // eslint-disable-next-line prefer-const
  for (let s in defaultSchemas) {
    schema[s] = schemas[s]
  }

  return schema
}
