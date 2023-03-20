export interface IDefaultSchemas {
  name?: boolean | undefined
  date?: boolean | undefined
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
    email: yup.string().required('Por favor, digite um email').email('Por favor, digite um email válido'),
    login: yup.string().required('Por favor, digite seu usuário'),
    date: yup.string().required('Por favor, digite uma data'),
    phone: yup.string().min(11, 'Por favor, digite um número válido').required('Por favor, digite um número'),
    message: yup.string().required('Por favor, digite uma mensagem'),
    subject: yup.string().required('Por favor, digite uma assunto'),
    name: yup.string().required('Por favor, digite seu nome'),
    lastName: yup.string().required('Por favor, digite seu último nome'),
    password: yup.string().required('Por favor, digite uma senha'),
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
