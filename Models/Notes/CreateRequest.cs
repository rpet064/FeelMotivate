namespace WebApi.Models.Notes;

using System.ComponentModel.DataAnnotations;
using WebApi.Entities;

public class CreateRequest
{
    [Required]
    public string Title { get; set; }

    [Required]
    public string Content { get; set; }
}