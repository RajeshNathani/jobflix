const ap_review = [
    {
        id: 1,
        review : 'Great Company',
        name: 'Rajesh Nathani'
    }
]
export default (req, res) => {
    res.status(200).json(ap_review)
  }