const Pwc = [
    {
        id:1,
        JobPosition:"Acceleration Center People Team Senior Program Manager",
        url:"https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Bangalore/Acceleration-Center-People-Team-Senior-Program-Manager_200501WD/apply?source=PwC_Global_Job_Board"
    },
    {
        id:2,
        JobPosition:"Advisory - Brand & Marketing-Content & Communication Hub - Senior Associate - Kolkata",
        url:"https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata/Advisory----Brand---Marketing-Content---Communication-Hub---Senior-Associate-2---Kolkata_176293WD/apply?source=PwC_Global_Job_Board"
    },
    {
        id:3,
        JobPosition:"Advisory - B&M - CCH - Senior Associate - KOL",
        url:"https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata/Advisory---B-M---CCH---Senior-Associate---KOL_139359WD-1/apply?source=PwC_Global_Job_Board"
    },
    {
        id:4,
        JobPosition:"Advisory - Brand & Marketing - D&M - CoE -",
        url:"https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Bangalore---RMZ-Hebbal/Advisory---Brand---Marketing---D-M---CoE--_193251WD-1/apply?source=PwC_Global_Job_Board"
    },
    {
        id:5,
        JobPosition:"Advisory - Brand & Marketing - DnM CoE - KOL - Senior Associate",
        url:"https://pwc.wd3.myworkdayjobs.com/Global_Experienced_Careers/job/Kolkata/Advisory---Brand---Marketing---DnM-CoE---KOL---Senior-Associate_193265WD/apply?source=PwC_Global_Job_Board"
    }
]
export default (req, res) => {
    res.status(200).json(Pwc)
  }