Example:

    <SelectField
      className='testClass'
      defaultValue='this is a TextField'
      hint='this is a hint'
      id='testId'
      label='this is a label'
      options={['option 1', 'option 2']}
      optionValues={['value for option 1', 'value for option 2']}
      onChange={(e)=>alert('"'+e.target.value+'"'+' was selected')}
    />
