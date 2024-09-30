using AcanTechnologiesBackend.Interfaces;
using AcanTechnologiesBackend.Models;

namespace AcanTechnologiesBackend.Repository
{
    public class IDevServiceContactRepository : IDevServiceContact
    {

    public bool Save()
    {
        return true;
    }

    public bool  CreateDevServiceContact(DevServiceContact devServiceConact)
    {
            return true;
    }
    }
}
