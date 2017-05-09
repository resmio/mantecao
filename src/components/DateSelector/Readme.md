Example:

    <DateSelector date='2017-07-31' onChange={()=>{}}/>

Month before day:

    <DateSelector monthBeforeDay date='2017-07-31' onChange={()=>{}}/>

No prop date:

    <DateSelector onChange={()=>{}}/>

Custom month names:

    <DateSelector
      onChange={()=>{}}
      monthNames={['Gener', 'Febrer', 'Març', 'Abril', 'Maig', 'Juny', 'Juliol', 'Agost', 'Setembre', 'Octubre', 'Novembre', 'Desembre']}
    />
