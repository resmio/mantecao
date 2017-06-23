Example:

    <SelectField
      className='testClass'
      hint='this is a hint'
      id='testId'
      label='this is a label'
      options={['option 1', 'option 2']}
      optionValues={['option 1', 'option 2']}
      onChange={(e)=>alert('"'+e.target.value+'"'+' was selected')}
    />
