const users = [
    {
        id:1,
        Name : "Ali ",
        Surname : "Can",
        Username : "ali",
        Password : "1234",
        Email:"ali@gmail.com",
        City :"Istanbul",
        ContactNo:"05301234567",
        UserRole:"User",
        CreatedDate:"20.05.2020",
        ModifiedDate:"25.05.2020",
        Picture:"ali_can.png"
        Cv:"ali_can_cv.pdf"
        Description:"aaaaaaaaa",
        Educations:[
        {
        	id:1,
			SchoolName:"University",
			StarteddDate:"21.06.2021",
			ModifiedDate:"22.06.2021",
			FinishedDate:"22.08.2021"
        }
        ],
        Experience:[
        {
        	id:1,
			CompanyName:"University",
			StarteddDate:"21.06.2021",
			ModifiedDate:"22.06.2021",
			FinishedDate:"22.08.2021"
        },
        {
        	id:2,
			CompanyName:"University 2",
			StarteddDate:"21.06.2021",
			ModifiedDate:"22.06.2021",
			FinishedDate:"22.08.2021"
        }
        [
        {
        	C++,javascript
        }]
        ],
        IsActive:true

    }
    


];
    
const companies=[
	{
		id:1,
		Name:"Philips",
		City:"Istanbul",
		ContactNo:"05301234567",
		Description:"Alman teknolojisi",
		FoundationYear:"1900",
		Sector :"Technology",
		PersonalCount:2500,
		Picture:"philips.png",
		Email:"philips@gmail.com",
		WebSite:"www.philips.com",
		Jobs:[
		{
			id:1,
			Name:"Bu bir is c++ ilanıdır",
			Description:"İs ilanı aciklamasi",
			Department:"Backend",
			PositionLevel : "Senior",
			PersonalCount:2,
			City:"Istanbul",
			CreatedDate:"21.06.2021",
			ModifiedDate:"22.06.2021",
			ClosedDate:"22.08.2021"

		},
			{
			id:2,
			Name:"Bu bir is ilanıdır",
			Description:"İs ilanı aciklamasi",
			Department:"Frontend",
			PositionLevel : "Senior",
			PersonalCount:2,
			City:"Istanbul",
			CreatedDate:"21.06.2021",
			ModifiedDate:"22.06.2021",
			ClosedDate:"22.08.2021"

		}


		]

	}
	];

module.exports = users;