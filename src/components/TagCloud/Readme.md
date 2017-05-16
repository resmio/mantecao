With close:

    <TagCloud
      names={['tag 1', 'tag next', 'tag end']}
      onClickAction={(tag) => {
        console.log('tag clicked:')
        console.log(tag)
      }}
    />

without:

    <TagCloud
      names={['do', 'not', 'touch']}
    />
