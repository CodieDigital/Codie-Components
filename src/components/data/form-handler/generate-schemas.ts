export interface IDefaultSchemas {
  name?: boolean | undefined
  city?: boolean | undefined
  date?: boolean | undefined
  loja?: boolean | undefined
  email?: boolean | undefined
  phone?: boolean | undefined
  login?: boolean | undefined
  cidade?: boolean | undefined
  select?: boolean | undefined
  message?: boolean | undefined
  subject?: boolean | undefined
  password?: boolean | undefined
  lastName?: boolean | undefined
  mesviajem?: boolean | undefined
  selectEvent?: boolean | undefined
  formaContato?: boolean | undefined
}

export async function generateSchemasByDemand(defaultSchemas: IDefaultSchemas | undefined) {
  const yup = await import('yup')

  // eslint-disable-next-line prefer-const
  let schema = {}

  const schemas = {
    name: yup.string().required('Por favor, digite seu nome'),
    date: yup.string().required('Por favor, digite uma data'),
    city: yup.string().required('Por favor, digite sua cidade'),
    loja: yup.string().required('Por favor, selecione uma loja'),
    cidade: yup.string().required('Por favor, digite sua cidade'),
    login: yup.string().required('Por favor, digite seu usuário'),
    password: yup.string().required('Por favor, digite uma senha'),
    mesviajem: yup.string().required('Por favor, digite uma data'),
    select: yup.string().required('Por favor, selecione uma opção'),
    subject: yup.string().required('Por favor, digite uma assunto'),
    message: yup.string().required('Por favor, digite uma mensagem'),
    selectEvent: yup.string().required('Por favor, digite uma assunto'),
    lastName: yup.string().required('Por favor, digite seu último nome'),
    formaContato: yup.string().required('Por favor, selecione uma forma de contato'),
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
