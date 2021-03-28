const Apple = [
    {
        id:1,
        JobPosition:"NEW Consultant - Tax - TMT - Global Compliance & Reporting - New Delhi",
        url:"https://eygbl.referrals.selectminds.com/student-opportunities/jobs/consultant-tax-tmt-global-compliance-reporting-new-delhi-192173"
    },
    {
        id:2,
        JobPosition:"NEW Consultant - Tax - FS - Busin Tax Compliance Generic - Mumbai",
        url:"https://eygbl.referrals.selectminds.com/student-opportunities/jobs/consultant-tax-fs-busin-tax-compliance-generic-mumbai-191385"
    },
    {
        id:3,
        JobPosition:"Associate Consultant - Business Consulting Risk - GOV - Technology Risk - New Delhi",
        url:"https://eygbl.referrals.selectminds.com/student-opportunities/jobs/associate-consultant-business-consulting-risk-gov-technology-risk-new-delhi-189248"
    },
    {
        id:4,
        JobPosition:"Analyst - Business Consulting Risk - TMT - Risk Assurance - Mumbai",
        url:"https://eygbl.referrals.selectminds.com/student-opportunities/jobs/analyst-business-consulting-risk-tmt-risk-assurance-mumbai-189326"
    },
    {
        id:5,
        JobPosition:"CBS_RMS_Associate Analyst",
        url:"https://eygbl.referrals.selectminds.com/experienced-opportunities/jobs/cbs_rms_associate-analyst-190698"
    }
]
export default (req, res) => {
    res.status(200).json(Apple)
  }