using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class Maroon5 : ControllerBase
    {
        [HttpGet]
        public ActionResult<string> Get()
        {
            return "<br>Here's to the ones that we got<br>Cheers to the wish you were here but you're not<br>'Cause the drinks bring back all the memories<br>Of everything we've been through<br>Toast to the ones here today<br>Toast to the ones that we lost on the way<br>'Cause the drinks bring back all the memories<br>And the memories bring back, memories bring back you<br><br>There's a time that I remember<br>When I did not know no pain<br>When I believed in forever<br>And everything would stay the same<br>Now my heart feel like December<br>When somebody say your name<br>'Cause I can't reach out to call you<br>But I know I will one day, yeah<br><br>Everybody hurts sometimes<br>Everybody hurts someday, ay ay<br>But everything gon' be alright<br>Go on raise a glass and say, ay<br><br>Here's to the ones that we got<br>Cheers to the wish you were here but you're not<br>'Cause the drinks bring back all the memories<br>Of everything we've been through<br>Toast to the ones here today<br>Toast to the ones that we lost on the way<br>'Cause the drinks bring back all the memories<br>And the memories bring back, memories bring back you<br><br>Doo-doo, doo-doo-doo-doo<br>Doo-doo-doo-doo, doo-doo-doo-doo<br>Doo-doo-doo-doo, doo-doo-doo<br>Memories bring back, memories bring back you<br><br>";
        }
    }
}
