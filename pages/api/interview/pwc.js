const pwc_ins = [
    {
      id : 1,
      problem : 'What do you mean by assessment year?',
    },
    {
      id : 2,
      problem : 'What is statutory audit?',
    },
    {
      id : 3,
      problem : 'How many heads are there under total income?',
    },
    {
      id : 4,
      problem : 'How will you decide the residential status of an individual?',
    },
    {
      id : 5,
      problem : 'What do you mean by vouching?',
    },
    {
      id : 6,
      problem : 'What is tax refund?',
    },
    {
      id : 7,
      problem : 'What is capital gain? Explain long term capital gains and how is it different from short term capital gains?',
    },
    {
      id : 8,
      problem : 'Tell me the name of big four auditors',
    },
    {
      id : 9,
      problem : 'What is alternative minimum tax (AMT)?',
    },
    {
      id : 10,
      problem : 'Tell me about a time when you worked effectively under pressure.',
    },

]
export default (req, res) => {
    res.status(200).json(pwc_ins)
  }