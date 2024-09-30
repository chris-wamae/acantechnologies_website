using AcanTechnologiesBackend.Models;

namespace AcanTechnologiesBackend.Interfaces
{
    public interface IDevServiceContact
    {

        bool Save();
        bool CreateDevServiceContact(DevServiceContact devServiceContact);
    }
}
