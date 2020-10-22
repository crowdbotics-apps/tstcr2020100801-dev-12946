# Generated by Django 2.2.16 on 2020-10-22 00:25

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plane',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tail_number', models.CharField(max_length=10)),
                ('make', models.CharField(max_length=50)),
                ('model', models.CharField(max_length=100)),
                ('category', models.CharField(max_length=50)),
                ('description', models.TextField()),
            ],
        ),
    ]
