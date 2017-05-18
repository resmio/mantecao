Example:

    <TextField
      className='testClass'
      placeHolder='this is a TextField'
      maxLength={22}
      minLength={3}
    />

Example textarea:

    <TextField
      className='testClass'
      placeHolder='this is a multiLine TextField'
      maxLength={22}
      minLength={3}
      multiLine
    />

With hint and label:

    <TextField
      className='testClass'
      placeHolder='this is a TextField'
      hint='this is a hint'
      id='testId'
      label='this is a label'
      maxLength={22}
      minLength={3}
    />

With icon:

    <TextField
      className='testClass'
      placeHolder='this is a TextField'
      icon={<EmailIcon small />}
      maxLength={22}
      minLength={3}
    />
